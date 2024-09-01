import {useQuery} from 'react-query'

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, isError, isLoading, refetch } = useQuery({
        queryFn: fetchPosts,
        queryKey: 'posts',
        staleTime: 5000, 
        cacheTime: 1000 * 60 * 10,
        refetchOnWindowFocus:false,
        keepPreviousData:true,
      });

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
            <button onClick={() => refetch()}>Refetch Data</button>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default PostsComponent;