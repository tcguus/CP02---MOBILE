import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Header title="Projetos Sustentáveis" />
        <Text style={styles.subtitle}>
          Conheça iniciativas que fazem a diferença na preservação do planeta!
          🌱
        </Text>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/7944403/pexels-photo-7944403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Reflorestamento 🌱 </Text>
          <Text style={styles.cardText}>
            Projetos que restauram áreas degradadas através do plantio de
            árvores nativas, promovendo biodiversidade e qualidade do ar.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/6995367/pexels-photo-6995367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Reciclagem na Comunidade ♻️ </Text>
          <Text style={styles.cardText}>
            Iniciativas que incentivam a coleta seletiva e a reutilização de
            materiais, contribuindo para a redução do lixo no meio ambiente.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Energia Sustentável ⚡ </Text>
          <Text style={styles.cardText}>
            Projetos que investem em fontes renováveis como solar e eólica,
            promovendo o uso de energia limpa e acessível.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Preservação da Água 🚰 </Text>
          <Text style={styles.cardText}>
            Ações que garantem o acesso à água potável e conscientizam sobre a
            importância de reduzir o desperdício desse recurso essencial.
          </Text>
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
    marginBottom: 20,
    textAlign: "center",
    color: "#00796b",
  },
  card: {
    backgroundColor: "#e0f2f1",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
  },
  image: {
    width: "85%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#00695c",
  },
  cardText: {
    fontSize: 16,
    color: "#004d40",
    marginBottom: 5,
    textAlign: "center",
  },
});
