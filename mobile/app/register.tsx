import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Register() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register Screen</Text>
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  );
}
