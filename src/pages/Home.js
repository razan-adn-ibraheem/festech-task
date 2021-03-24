import React, {Component} from 'react';
import man from '../static/images/man.png'
import top from '../static/images/top.png';
import whithshape from '../static/images/Path 968.png';
import ApplyForm from '../components/ApplyForm';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="home_page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="left">
                                <h2 className="logo">digg</h2>
                                <div className="home_img">
                                <img src={top} className="top_img" alt="top"/>
                                <img src={man} className="man_img" alt="man" />
                                <img src={whithshape} className="shape_img" alt="shape"/>
                                </div>
                                <q>
                                Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!
                                </q>
                                <h3>
                                Mohammed, One Step Dubai student
                                </h3>
                                <h3>
                                    Pakistan
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                           <div className="right">
                                <h2 className="text-center">Apply now to work in Dubai </h2>
                                <ApplyForm />
                           </div>
                        </div>
                    </div>
                </div>

              
            
            </div>
        );
    }
}
export default  Home;
