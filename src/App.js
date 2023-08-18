import React, { useState } from "react";
import { Typography, CssBaseline} from '@mui/material'
import NewsFeed from "./NewsFeed";
import FeedIcon from '@mui/icons-material/Feed';
import { AppBar, Toolbar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Footer from "./Footer";

const App = () => {

  const [searchValue,setSearchValue] = useState('');


  const handleSubmit = (e) =>{
      e.preventDefault();
      let value = e.target[0].value;
      setSearchValue(value);
  }

  return (
    <>
      <CssBaseline />

      <AppBar position="relative">
                <Toolbar>
                    <FeedIcon />
                    <Typography>
                        News App
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search Here...' name='search' />
                        <button><SearchIcon /></button>
                    </form>
                </Toolbar>
            </AppBar>

      <main>

        <NewsFeed searchValue={searchValue} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
