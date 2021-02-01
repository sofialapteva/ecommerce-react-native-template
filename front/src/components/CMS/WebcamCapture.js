import React, { useRef, useState, useCallback } from "react";
import { View, Alert } from "react-native";
import Webcam from "react-webcam";
import styles from "../../styles";
import NavButton from "../commonComponents/NavButton";

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "environment",
};

function WebcamCapture({ saveImage }) {
  const [toggleCamera, setToggleCamera] = useState(false)
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setToggleCamera(false)
    saveImage(imageSrc)
    Alert.alert('', 'Picture added')
  }, [webcamRef]);

  return (
    <View>
      {toggleCamera ?
        <View >
          <Webcam
            audio={false}
            height={videoConstraints.height}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
          />
          <NavButton text="Click" style={styles.redbutton} onPress={capture} />
        </View> :
        <NavButton text="Add picture" style={styles.redbutton} onPress={() => setToggleCamera(true)} />}
    </View>
  );
}

export default WebcamCapture;
