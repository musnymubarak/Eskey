import { StyleSheet, Text, View } from 'react-native';

export default function AdCard({ ad }: { ad: any }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{ad.title}</Text>
      <Text>{ad.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
});
