import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22 }}>🏠 Welcome to Real Estate App</Text>
      <Link href="/explore" asChild>
        <Button title="Explore Listings" />
      </Link>
    </View>
  );
}
