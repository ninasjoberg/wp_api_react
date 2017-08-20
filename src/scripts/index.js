import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import Home                 from 'components/Home.js';
import About                from 'components/About.js';
import Contact              from 'components/Contact.js';
import Products             from 'components/Products.js';
import Header               from 'components/Header.js';
import ProductView          from 'components/ProductView.js';


import {
    BrowserRouter as Router,
    Route,
    hashHistory,
    Redirect,
    Switch
} from 'react-router-dom';



class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'products': Products
    }



    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router history={hashHistory}>
                    <div>
                        <Header />

                        <Switch> /* group Routes. Switch will iterate over its children elements (the routes) and only render the first one that matches the current pathname. */
                            <Route path="/" component={ Home } exact />
                            {this.buildRoutes(response)}
                            <Route path="/products/:id" component={ProductView}/>
                            <Route render={() => { return <Redirect to="/" /> }} /> /* if no route found,url not found,  redirect to home / */
                        </Switch> 
                    </div>   
                </Router>
                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
