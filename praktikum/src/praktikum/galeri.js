import React from 'react';
import './galeri.css'

class Galeri extends React.Component {
    render(){
        return(
            <div>
                <div class="jumbotron text-center">
                    <h1>ADIWIYATA</h1>
                    <p>Program Pendidikan Lingkungan Hidup</p> 
                </div>

                <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/1.jpg" width="300px"></img>
                                        <div class="caption">
                                        <h3>Hari Perencanaan Gerakan 1 Juta Pohon</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/2.jfif" width="300px"></img>
                                        <div class="caption">
                                        <h3>Hari Kehutanan Sedunia</h3>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="img-thumbnail">
                                    <img src="image/3.jfif" width="300px"></img>
                                        <div class="caption">
                                        <h3>Hari Bumi</h3>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Galeri;
