import React, { useState, useEffect } from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { PostService } from "../services/post.service";
import axios from "axios";
import { MediaService } from "../services/media.service";
import { AuthService } from "../services/auth.service";
import * as ImagePicker from "expo-image-picker";

const isMobile = Platform.OS === "ios" || Platform.OS === "android";

const Postcard = ({ image, price, title, location, description, contact }) => {
  return (
    <View>
      <View style={styles.postcard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.texts, { alignSelf: "left", textAlign: "left" }]}>
          Description: {description}
        </Text>
        <Text
          style={[
            styles.texts,
            { paddingBottom: 2, alignSelf: "left", textAlign: "left" },
          ]}
        >
          Contact: {contact}
        </Text>
      </View>
    </View>
  );
};

const PostForm = () => {
  const navigation = useNavigation();

  const image = {
    image: selectedImage ? selectedImage.uri : "",
  };
  const posts = [
    {
      media: selectedImage,
      compensation: Price,
      title: Title,
      location: Location,
      description: Description,
      contact: Contact,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [Price, setPrice] = useState("");
  const [Title, setTitle] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [Contact, setContact] = useState("");
  const [numberOfLines, setNumberOfLines] = useState(1);
  const [error, setError] = useState("");
  useEffect(() => {}, []);

  const handlePriceChange = (text) => {
    setPrice(text);
  };

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleContactChange = (text) => {
    setContact(text);
  };

  const handleContentSizeChange = (event) => {
    const { width } = event.nativeEvent.contentSize;
    const containerWidth = Dimensions.get("window").width * 0.9;

    if (width > containerWidth * 0.9) {
      setNumberOfLines(2);
    } else {
      setNumberOfLines(1);
    }
  };

  const handleImageUpload = async () => {
    if (Platform.OS === "web") {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async () => {
          const image = reader.result;

          const uploadCloudinary = async (image) => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "vweauohf");
            const response = await axios.post(
              "https://api.cloudinary.com/v1_1/dxihhuhvk/image/upload",
              formData
            );
            return response.data.secure_url;
          };

          const imgUrl = await uploadCloudinary(image);
          setSelectedImage({ uri: imgUrl });
        };
        reader.readAsDataURL(file);
      });
      input.click();
    } else {
      const uploadCloudinary = (image) => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "image");
        data.append("cloud_name", "vweauohf");
        fetch("https://api.cloudinary.com/v1_1/dxihhuhvk/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setSelectedImage(data.url);
          });
      };

      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [1, 1],
        quality: 1,
      });

      if (!data.canceled) {
        let newFile = { uri: data.uri };
        uploadCloudinary(newFile);
        setSelectedImage({ uri: data.uri });
      }
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
  };

  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(true);
  };
  const scroll = useState(handlePress);

  const handleSubmit = async () => {
    if (
      Price === "" ||
      Title === "" ||
      Location === "" ||
      Description === "" ||
      Contact === ""
    ) {
      setError("Please fill out all fields");
      return;
    }
    const storedUserId = await AuthService.getToken("userId").then((res) => {
      return res;
    });
    if (storedUserId === null) {
      setError("Please login to post");
      return;
    }
    try {
      const post = {
        media: selectedImage.uri,
        compensation: Price,
        title: Title,
        location: Location,
        description: Description,
        contactInfo: Contact,
        author: storedUserId,
      };
      console.log(post);
      PostService.createPost(post).then((res) => {
        console.log(res);
        navigation.navigate("Home | Misplaced");
        if (!isMobile) {
          window.location.reload();
        }
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: "#f2f2f2" }}>
      <ScrollView style={{ backgroundColor: "#f2f2f2" }}>
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={selectedImage ? handleImageDelete : handleImageUpload}
              style={{
                alignItems: "center",
                width: selectedImage ? 300 : 120,
                height: selectedImage ? 200 : 70,
                fontSize: 12,
                borderWidth: 1,
                borderColor: "black",
                marginTop: 10,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 20,
                zIndex: 0,
                paddingTop: selectedImage ? 0 : 10,
                overflow: "hidden",
              }}
            >
              {selectedImage ? (
                <View style={styles.imageContainer}>
                  <ImageBackground
                    source={{ uri: selectedImage.uri }}
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: 0,
                      overflow: "hidden",
                    }}
                    imageStyle={{
                      resizeMode: "cover",
                      transform: [{ scale: 1.75 }],
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                      }}
                    >
                      <BlurView style={{ flex: 1 }} intensity={200} />
                    </View>
                    <Image
                      source={{ uri: selectedImage.uri }}
                      style={styles.image}
                    />
                  </ImageBackground>
                </View>
              ) : (
                <Text style={styles.upload}>Upload Image</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            {posts.map((post) => (
              <Postcard
                price={Price}
                title={Title}
                location={Location}
                description={Description}
                contact={Contact}
              />
            ))}
          </View>
          <TextInput
            onPress={handlePress}
            style={styles.input}
            multiline={false}
            numberOfLines={numberOfLines}
            placeholder="Enter a title"
            onChangeText={setTitle}
            value={Title}
            onContentSizeChange={handleContentSizeChange}
            scrollEnabled={false}
          />
          <TextInput
            onPress={handlePress}
            style={styles.input}
            multiline={true}
            numberOfLines={numberOfLines}
            placeholder="Enter a price"
            onChangeText={(text) => {
              let numericText = text.replace(/[^0-9]/g, "");
              setPrice("$" + numericText);
            }}
            value={Price}
            onContentSizeChange={handleContentSizeChange}
            keyboardType="numeric"
            scrollEnabled={false}
          />
          <TextInput
            onPress={handlePress}
            style={styles.input}
            multiline={false}
            numberOfLines={numberOfLines}
            placeholder="Enter a location"
            onChangeText={setLocation}
            value={Location}
            onContentSizeChange={handleContentSizeChange}
            scrollEnabled={false}
          />
          <TextInput
            onPress={handlePress}
            style={styles.input}
            multiline={true}
            numberOfLines={numberOfLines}
            placeholder="Enter a description"
            onChangeText={setDescription}
            value={Description}
            onContentSizeChange={handleContentSizeChange}
            scrollEnabled={false}
          />
          <TextInput
            onPress={handlePress}
            style={styles.input}
            multiline={true}
            numberOfLines={numberOfLines}
            placeholder="Enter a contact"
            onChangeText={setContact}
            value={Contact}
            onContentSizeChange={handleContentSizeChange}
            scrollEnabled={false}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.create}>
            <Text
              style={[
                styles.texts,
                {
                  backgroundColor: "#ffda70",
                  fontSize: 19,
                  fontWeight: "300",
                  width: "98%",
                  alignSelf: "center",
                },
              ]}
            >
              Create Post
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center", paddingBottom: 20 }}>
            {error}
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginTop: 0,
  },
  postcard: {
    width: 280,
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    margin: 10,
    backgroundColor: "white",
    overflow: "auto",
  },
  info: {
    width: isMobile ? "75%" : 250,
    textAlign: "center",
    margin: 10,
    alignSelf: "center",
    height: "auto",
    flexWrap: "wrap",
    marginBottom: 0,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    width: "130%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    aspectRatio: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 2,
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
  },
  price: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
  },
  location: {
    margin: 8,
    fontSize: 14,
    color: "gray",
    textAlign: "left",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 50,
    top: 0,
    marginTop: 0,
  },
  texts: {
    fontSize: 15,
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
    top: 0,
    backgroundColor: "#f2f2f2",
  },
  upload: {
    fontSize: 15,
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
    top: 0,
  },
  texttitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#000",
    marginTop: 10,
    marginBottom: 10,
    top: 0,
    backgroundColor: "#f2f2f2",
  },
  input: {
    textAlign: "center",
    fontSize: 12,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
    marginTop: 5,
    marginRight: "15%",
    marginLeft: "15%",
    borderRadius: 10,
  },
  create: {
    textAlign: "center",
    fontSize: 17,
    borderWidth: 1,
    backgroundColor: "#ffda70",
    borderColor: "#ffbd03",
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1,
    paddingTop: 11,
    marginBottom: 10,
    marginTop: 15,
    marginRight: "30%",
    marginLeft: "30%",
    borderRadius: 20,
  },
});

export default PostForm;
