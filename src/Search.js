import axios from 'axios';
import { Page, PageContent, PageHeader, Text, TextInput } from 'grommet';
import { useEffect, useState } from 'react';

function Search() {
    const [value, setValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        console.log("Fetching search results...");
        setSearchResults([]);
        async function getData() {
          const res = await axios({
            url: 'https://api.music.apple.com/v1/catalog/us/search',
            params: {
                term: 'bad bunny',
                types: 'songs,albums,artists'
            },
            method: 'get'
          })
          setSearchResults(res.data);
          console.log(res.data);
        }
        getData();
    }, [value]);

    return (
        <Page>
            <PageContent background="light-3">
                <PageHeader
                    title="Search"
                    subtitle="This is the page where you search!"
                />
                <TextInput
                    placeholder="Search"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <Text>{searchResults}</Text>
            </PageContent>
        </Page>
    );
}

export default Search;