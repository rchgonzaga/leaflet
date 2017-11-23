import React, { Component } from 'react';
import { Map, TileLayer, Circle, FeatureGroup, GeoJSON } from 'react-leaflet';
import { EditControlLayer } from './draw';
import config from './config.json';

let polyline;
const subs = [ 'a', 'b', 'c', 'd' ];


function getGeoJson() {
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -122.47979164123535,
                            37.830124319877235
                        ],
                        [
                            -122.47721672058105,
                            37.809377088502615
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.46923446655273,
                        37.80293476836673
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.48399734497069,
                        37.83466623607849
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.47867584228514,
                        37.81893781173967
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": { id: "NH1" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -122.48069286346434,
                                37.800637436707525
                            ],
                            [
                                -122.48069286346434,
                                37.803104310307276
                            ],
                            [
                                -122.47950196266174,
                                37.803104310307276
                            ],
                            [
                                -122.47950196266174,
                                37.800637436707525
                            ],
                            [
                                -122.48069286346434,
                                37.800637436707525
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {id: "NH2"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -122.48103886842728,
                                37.833075326166274
                            ],
                            [
                                -122.48065531253813,
                                37.832558431940114
                            ],
                            [
                                -122.4799284338951,
                                37.8322660885204
                            ],
                            [
                                -122.47963070869446,
                                37.83231693093747
                            ],
                            [
                                -122.47948586940764,
                                37.832467339549524
                            ],
                            [
                                -122.47945636510849,
                                37.83273426112019
                            ],
                            [
                                -122.47959315776825,
                                37.83289737938241
                            ],
                            [
                                -122.48004108667372,
                                37.833109220743104
                            ],
                            [
                                -122.48058557510376,
                                37.83328293020496
                            ],
                            [
                                -122.48080283403395,
                                37.83332529830436
                            ],
                            [
                                -122.48091548681259,
                                37.83322785163939
                            ],
                            [
                                -122.48103886842728,
                                37.833075326166274
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": { id: "NH3" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -122.48043537139893,
                                37.82564992009924
                            ],
                            [
                                -122.48129367828368,
                                37.82629397920697
                            ],
                            [
                                -122.48240947723389,
                                37.82544653184479
                            ],
                            [
                                -122.48373985290527,
                                37.82632787689904
                            ],
                            [
                                -122.48425483703613,
                                37.82680244295304
                            ],
                            [
                                -122.48605728149415,
                                37.82639567223645
                            ],
                            [
                                -122.4898338317871,
                                37.82663295542695
                            ],
                            [
                                -122.4930953979492,
                                37.82415839321614
                            ],
                            [
                                -122.49700069427489,
                                37.821887146654376
                            ],
                            [
                                -122.4991464614868,
                                37.82171764783966
                            ],
                            [
                                -122.49850273132326,
                                37.81798857543524
                            ],
                            [
                                -122.50923156738281,
                                37.82090404811055
                            ],
                            [
                                -122.51232147216798,
                                37.823344820392535
                            ],
                            [
                                -122.50150680541992,
                                37.8271414168374
                            ],
                            [
                                -122.48743057250977,
                                37.83093781796035
                            ],
                            [
                                -122.48313903808594,
                                37.82822612280363
                            ],
                            [
                                -122.48043537139893,
                                37.82564992009924
                            ]
                        ]
                    ]
                }
            }
        ]
    }
}

export default class EditControlExample extends Component {

    constructor() {
        super();
        this.state = {
            lat: 37.81893781173967,
            lng: -122.47867584228514,
            zoom: 13,
            open: false
        };
    }

    getStyle(feature, layer) {
        return {
            color: '#006400',
            weight: 5,
            opacity: 0.65
        }
    }

  _onEditPath(e) {
    console.log('Path edited !');
  }

  _onCreate(e) {
    polyline = e.layer;
    // To edit this polyline call : polyline.handler.enable()
    console.log('Path created !');
  }

  _onDeleted(e) {
    console.log('Path deleted !');
  }

  _mounted(drawControl) {
    console.log('Component mounted !');
  }

  _onEditStart() {
    console.log('Edit is starting !');
  }

  _onEditStop() {
    console.log('Edit is stopping !');
  }

  _onDeleteStart() {
    console.log('Delete is starting !');
  }

  _onDeleteStop() {
    console.log('Delete is stopping !');
  }


  onEachFeature(feature, layer) {
      const func = (e) => { 
          console.log("Click")
          console.log(feature.properties.id) 
      };
  
      layer.on({
          click: func
      });
  }

  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={13} zoomControl={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          mapId={config.mapId}
          token={config.token}
          subdomains={subs}
        />
        <FeatureGroup>
            <EditControlLayer
              position='topright'
              onEdited={this._onEditPath}
              onCreated={this._onCreate}
              onDeleted={this._onDeleted}
              onMounted={this._mounted}
              onEditStart={this._onEditStart}
              onEditStop={this._onEditStop}
              onDeleteStart={this._onDeleteStart}
              onDeleteStop={this._onDeleteStop}
              draw={{
                rectangle: false
              }}
            />
            <Circle center={[51.51, -0.06]} radius={200} />
            
            <GeoJSON 
                data={getGeoJson()} 
                style={this.getStyle} 
                key={Math.random()}
                onEachFeature={this.onEachFeature.bind(this)}/>

        </FeatureGroup>
      </Map>
    );
  }
}