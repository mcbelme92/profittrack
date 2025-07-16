import { Image } from "expo-image";
import { Platform, StyleSheet, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          <Text>Bienvenido Pepe TEST pantallazo</Text>
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          <Text>Step 1: Try it</Text>
        </ThemedText>
        <ThemedText>
          <Text>
            Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see
            changes. Press
          </Text>
          <ThemedText type="defaultSemiBold">
            <Text>
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </Text>
          </ThemedText>
          <Text>to open developer tools.</Text>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          <Text>Step 2: Explore</Text>
        </ThemedText>
        <ThemedText>
          <Text>
            {`Tap the Explore tab to learn more about what's included in this starter app.`}
          </Text>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
          <Text>{`When you're ready, run `}
        <ThemedText type="subtitle"><Text>Step 3: Get a fresh start</Text></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"><Text>npm run reset-project</Text></ThemedText><Text>to get a fresh</Text> 
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          </ThemedText>
          </Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
