import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styles from "../../styles";
import NavButton from "../commonComponents/NavButton";
import { View, Image } from "react-native";
const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};
function WebcamCapture() {
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 150,
          borderWidth: 1,
          borderColor: "red",
        }}
        source={{ uri: image }}
      />

      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <NavButton text="click!" style={styles.greenbutton} onPress={capture} />
    </View>
  );
}

export default WebcamCapture;
