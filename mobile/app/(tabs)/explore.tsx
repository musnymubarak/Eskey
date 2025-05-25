import { FlatList } from 'react-native';
import AdCard from '../../components/AdCard';
import { dummyAds } from '../../constants/dummyData';

export default function Explore() {
  return (
    <FlatList
      data={dummyAds}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <AdCard ad={item} />}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}
