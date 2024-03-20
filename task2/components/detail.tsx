import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// This is a placeholder for your actual data fetching function
async function getDataByTitle(title:any) {
    // Fetch data based on the title
    // This is just a placeholder. Replace it with your actual data fetching code.
    const response = await fetch(`/data?title=${title}`);
    const data = await response.json();
    return data;
}

const DetailPage = () => {
    const router = useRouter();
    const { title } = router.query;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (title) {
            getDataByTitle(title).then(data => setData(data));
        }
    }, [title]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Hellow ther</h1>
            <p>buy</p>
            {/* Render the rest of the data here */}
        </div>
    );
}

export default DetailPage;