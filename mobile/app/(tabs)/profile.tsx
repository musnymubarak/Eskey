import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function Profile() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>You are not logged in.</Text>
        <Button title="Login" onPress={() => router.push('/login')} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You are logged in.</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
