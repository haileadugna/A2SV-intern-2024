import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DetailPage = () => {
    const router = useRouter();
    const { title } = router.query;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (title) {
            // Replace this with your actual data fetching code
            fetch(`/api/data?title=${encodeURIComponent(title.toString())}`)
                .then(response => response.json())
                .then(data => setData(data));
        }
    }, [title]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>hi</h1>
            <p>hi</p>
            {/* Render the rest of the data here */}
        </div>
    );
}

export default DetailPage;