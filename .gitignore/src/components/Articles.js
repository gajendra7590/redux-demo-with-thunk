import React,{ useEffect } from 'react'; 
import { connect } from 'react-redux';
import { fetchingArtcles } from '../redux'

function Articles( { fetchingArtcles,articles } ) {  
    useEffect( () => { 
        fetchingArtcles() 
    },[])

    return (
        <div>
            <h2>Articles List</h2>  
            <div>
                {
                    (articles.loader == true)
                      ?'Fetching please wait....'
                      :((articles.error!='') 
                         ?(<p>{articles.error}</p>)
                :articles.data.map( article =>  <p>{article.name}</p>) ) 
                } 
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles : state.articles
    } 
} 
const mapDispatchToProps = dispatch => {
    return {
        fetchingArtcles : () => dispatch(fetchingArtcles())
    } 
} 
export default connect(mapStateToProps,mapDispatchToProps)(Articles)
