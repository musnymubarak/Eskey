import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function Post() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Please log in to post an ad.</Text>
        <Button title="Login" onPress={() => router.push('/login')} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post Ad Form goes here...</Text>
    </View>
  );
}
