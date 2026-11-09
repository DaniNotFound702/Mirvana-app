import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="smallBold" themeColor="textSecondary">
            MIRVANA
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Your quiet space
          </ThemedText>
        </View>

        <View style={styles.content}>
          <View style={[styles.mark, { backgroundColor: theme.primary }]}>
            <ThemedText style={[styles.markText, { color: theme.accent }]}>
              M
            </ThemedText>
          </View>
          <ThemedText
            type="title"
            style={[styles.title, { color: theme.heading }]}
          >
            Come back to yourself.
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.description}>
            A simple place to slow down, reflect, and make space for what
            matters.
          </ThemedText>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            activeOpacity={0.8}
          >
            <ThemedText style={[styles.buttonText, { color: theme.onPrimary }]}>
              Begin your journey
            </ThemedText>
          </TouchableOpacity>
        </View>

        <ThemedText
          type="small"
          themeColor="textSecondary"
          style={styles.footer}
        >
          Take a breath. Start here.
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 520,
    width: "100%",
    alignSelf: "center",
  },
  mark: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  markText: {
    fontSize: 24,
    fontWeight: "700",
  },
  title: {
    maxWidth: 460,
    fontSize: 46,
    lineHeight: 52,
  },
  description: {
    maxWidth: 390,
    marginTop: 18,
    fontSize: 17,
    lineHeight: 26,
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 22,
    paddingVertical: 15,
    marginTop: 32,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    textAlign: "center",
  },
});
