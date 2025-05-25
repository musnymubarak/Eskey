import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Log In" onPress={() => { login(); router.push('/'); }} />
    </View>
  );
}
