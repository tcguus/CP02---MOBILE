import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";

export default function ResourcesScreen() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Header title="Recursos Úteis" />
        <Text style={styles.subtitle}>
          Explore informações e ferramentas para um futuro sustentável! 🌱
        </Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Aprenda sobre sustentabilidade 📘{" "}
          </Text>
          <Text style={styles.cardText}>
            Descubra dicas práticas para reduzir seu impacto ambiental e viver
            de forma mais sustentável!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://www.ecycle.com.br")}
          >
            <Text style={styles.buttonText}>Dicas de Sustentabilidade</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Entenda as Mudanças Climáticas 🌎{" "}
          </Text>
          <Text style={styles.cardText}>
            Explore os efeitos das mudanças climáticas e como podemos agir para
            proteger nosso planeta.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://climate.nasa.gov/")}
          >
            <Text style={styles.buttonText}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Curiosidade 💡 </Text>
          <Text style={styles.cardText}>
            Sabia que apenas 9% do plástico produzido no mundo é reciclado?
            Precisamos de ações urgentes para reduzir o desperdício!
          </Text>
        </View>

        <Image
          source={{
            uri: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ferramentas de Impacto ♻️</Text>
          <Text style={styles.cardText}>
            Aplicativos e calculadoras para medir sua pegada ecológica e adotar
            hábitos mais sustentáveis.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL("https://www.footprintcalculator.org/")
            }
          >
            <Text style={styles.buttonText}>
              Calculadora de Pegada Ecológica
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgb(231, 255, 241)",
  },
  container: { flex: 1, alignItems: "center", padding: 0 },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#00796b",
  },
  image: {
    width: "70%",
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  card: {
    backgroundColor: "#e0f2f1",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#00695c",
  },
  cardText: { fontSize: 16, color: "#004d40", marginBottom: 5 },
  button: {
    backgroundColor: "#007f5f",
    padding: 14,
    marginTop: 10,
    borderRadius: 10,
    width: "65%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
