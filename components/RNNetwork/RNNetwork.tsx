import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const RNNetwork = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async (limit = 10) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
      setError("");
    } catch (e) {
      console.error(e);
      setError("Enable to fetch the post list");
      setLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    try {
      setPosting(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            title,
            body,
          }),
        }
      );

      const newData = await response.json();
      setData([newData, ...data]);
      setTitle("");
      setBody("");
      setPosting(false);
      setError("");
    } catch (e) {
      console.error(e);
      setError("Enable to fetch the post list");
      setPosting(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingStyle}>
        <ActivityIndicator size="large" />
        <Text>Loading....</Text>
      </View>
    );
  }
  return (
    <>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Post Title"
              style={styles.input}
            />
            <TextInput
              value={body}
              onChangeText={setBody}
              placeholder="Post Body"
              style={styles.input}
            />
            <Button
              title={posting ? "Adding Post..." : "Add Post"}
              disabled={posting}
              onPress={addPost}
            />
          </View>
          <FlatList
            data={data}
            style={styles.mainContainer}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListHeaderComponent={
              <Text style={styles.headerStyle}>Start of Posts</Text>
            }
            ListFooterComponent={
              <Text style={styles.headerStyle}>End of Posts</Text>
            }
            ListEmptyComponent={<Text>No Posts Found</Text>}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f6f6f6",
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headerStyle: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
  },
  loadingStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  firstContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    gap: 10,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  errorContainer: {
    alignSelf: "center",
    borderColor: "red",
    borderRadius: 8,
    borderWidth: 0.5,
    elevation: 10,
    backgroundColor: "white",
  },
  error: {
    padding: 10,
    color: "red",
  },
});

export default RNNetwork;
