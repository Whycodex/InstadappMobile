import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, BackHandler, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
