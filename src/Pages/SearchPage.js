import React from 'react';
import response from '../response';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../Components/useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);//Live Api Call

    // const data = Response;//Mock Api Call

    // https://developers.google.com/custom-search/v1/using_rest

    //https://cse.google.com/cse/create/new

    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img
                        className='searchPage__logo'
                        src='https://www.google.be/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                        alt=''
                    />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to='/all'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='/all'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link to='/all'>shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to='/all'>maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to='/all'>more</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {term ? (
                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults}
                        results in ({data?.searchInformation.formattedSearchTime} seconds)
                        for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a target='_blank' href={item.link}>
                                <img className='searchPage__resultImage' src={
                                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                }
                                />
                                {item.displayLink}
                            </a>
                            <a className='searchPage__resultTitle' target='_blank' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}

                </div>
            ) : <h1 style={{ color: '#5077be', margin: '40px', marginLeft: '240px', marginTop: '100px', maxWidth: '600px' }}> Hey buddy hit the enter after you have typed in the searchbox! 🙂</h1>}

        </div >
    )
}

export default SearchPage;
