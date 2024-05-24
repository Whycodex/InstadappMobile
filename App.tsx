import React, { useEffect, useRef, useState } from "react";
import { StatusBar, BackHandler } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleBackButton = () => {
    if (canGoBack && webViewRef.current) {
      (webViewRef.current as any).goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [canGoBack]);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: "https://instadapp.io/" }}
        style={{ flex: 1 }}
        onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
      />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
