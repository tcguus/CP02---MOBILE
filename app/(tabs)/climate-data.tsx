import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import Header from "../../components/Header";

interface WeatherData {
  main: { temp: number; humidity: number };
  weather: { description: string }[];
}

export default function ClimateDataScreen() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);
  const apiKey = Constants.expoConfig?.extra?.openWeatherApiKey;

  console.log("Chave da API:", apiKey);

  const fetchClimateData = async () => {
    if (city.trim() === "") {
      Alert.alert("Erro", "Por favor, insira o nome de uma cidade.");
      return;
    }
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
      );
      setData(response.data);
    } catch (error) {
      Alert.alert("Erro", "Cidade não encontrada ou API inválida.");
    }
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Header title="Clima Atual" />
        <Text style={styles.subtitle}>
          Saiba como está o clima na sua localização! 🌦️
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a cidade"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity style={styles.button} onPress={fetchClimateData}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        {data && (
          <View style={styles.result}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
              }}
              style={styles.icon}
            />
            <Text style={styles.info}>🌡 Temperatura: {data.main.temp}°C</Text>
            <Text style={styles.info}>💧 Umidade: {data.main.humidity}%</Text>
            <Text style={styles.info}>
              ☁️ Clima: {data.weather[0].description}
            </Text>
          </View>
        )}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Curiosidades do Clima 💡</Text>
          <Text style={styles.cardText}>
            🌪️ O lugar mais ventoso do mundo é a Antártica, com rajadas que
            ultrapassam 200 km/h!
          </Text>
          <Text style={styles.cardText}>
            ☁️ As nuvens podem conter milhões de litros de água, mas flutuam por
            causa da distribuição do peso.
          </Text>
          <Text style={styles.cardText}>
            🔥 A maior temperatura já registrada foi de 56,7°C no Vale da Morte,
            EUA.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Previsão do Tempo 🔮</Text>
          <Text style={styles.cardText}>
            📅 Em breve: previsão para os próximos 5 dias!
          </Text>
          <Text style={styles.cardText}>
            🌦️ Tendências de temperatura e chuva.
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
  input: {
    width: "50%",
    height: 40,
    borderColor: "#00796b",
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#e0f7fa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007f5f",
    padding: 14,
    marginBottom: 20,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  result: { marginTop: 20, alignItems: "center" },
  info: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
    color: "#004d40",
  },
  icon: { width: 80, height: 80, marginBottom: 10, borderRadius: 40 },
  card: {
    backgroundColor: "#e0f2f1",
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
    width: "80%",
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
});
