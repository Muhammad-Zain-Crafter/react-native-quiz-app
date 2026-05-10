import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const categories = [
    {
      name: "Science",
      icon: "🧪",
    },
    {
      name: "Technology",
      icon: "💻",
    },
    {
      name: "Sports",
      icon: "⚽",
    },
    {
      name: "History",
      icon: "📚",
    },
    {
      name: "Mathematics",
      icon: "📐",
    },
    {
      name: "General Knowledge",
      icon: "🌍",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome Back 👋</Text>
          <Text style={styles.username}>Muhammad Zain</Text>
        </View>

        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>MZ</Text>
        </View>
      </View>

      {/* Main Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Interactive Quiz App
        </Text>

        <Text style={styles.bannerSubtitle}>
          Learn smarter with AI powered quiz explanations
        </Text>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push("/quiz/quiz")}
        >
          <Text style={styles.startButtonText}>
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Quizzes</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>480</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>85%</Text>
          <Text style={styles.statLabel}>Accuracy</Text>
        </View>

      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>
        Categories
      </Text>

      <View style={styles.categoriesContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() =>
              router.push({
                pathname: "/quiz/quiz",
                params: { category: item.name },
              })
            }
          >
            <Text style={styles.categoryIcon}>
              {item.icon}
            </Text>

            <Text style={styles.categoryText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* AI Section */}
      <View style={styles.aiBox}>
        <Text style={styles.aiTitle}>
          🤖 AI Suggestions
        </Text>

        <Text style={styles.aiText}>
          Get smart explanations, hints, and learning tips after every quiz attempt.
        </Text>

        <TouchableOpacity
          style={styles.aiButton}
          onPress={() => router.push("/ai/explanation")}
        >
          <Text style={styles.aiButtonText}>
            Explore AI Features
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070B14",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#9CA3AF",
    fontSize: 16,
  },

  username: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  profileCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#7C3AED",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  banner: {
    marginTop: 30,
    backgroundColor: "#111827",
    borderRadius: 25,
    padding: 25,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 38,
  },

  bannerSubtitle: {
    color: "#9CA3AF",
    fontSize: 15,
    marginTop: 12,
    lineHeight: 24,
  },

  startButton: {
    backgroundColor: "#7C3AED",
    marginTop: 25,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  startButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  statCard: {
    backgroundColor: "#111827",
    width: "31%",
    paddingVertical: 22,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  statNumber: {
    color: "#8B5CF6",
    fontSize: 24,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#9CA3AF",
    marginTop: 8,
    fontSize: 14,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 18,
  },

  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryCard: {
    backgroundColor: "#111827",
    width: "48%",
    borderRadius: 20,
    paddingVertical: 28,
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  categoryIcon: {
    fontSize: 32,
    marginBottom: 12,
  },

  categoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  aiBox: {
    backgroundColor: "#0F172A",
    borderRadius: 22,
    padding: 25,
    marginTop: 15,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  aiTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  aiText: {
    color: "#94A3B8",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 12,
  },

  aiButton: {
    backgroundColor: "#06B6D4",
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 22,
    alignItems: "center",
  },

  aiButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});