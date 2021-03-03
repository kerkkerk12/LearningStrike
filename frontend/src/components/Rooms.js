import { Component } from 'react';
import Room from './Room';
export default class Rooms extends Component {
    render() {

        const rooms = [{ subj: 'cn101', name: 'Jack Weerachai' }, 
                        { subj: 'sf210', name: 'Paul Supakit' }, 
                        { subj: 'sf220', name: 'Ajarn Piya' },
    ]
        return (
                <div className="row" >

                    {rooms.map(room => {
                        return (

                            <Room
                                subj={room.subj}
                                name={room.name}
                            >
                            </Room>
                        )
                    })}
                </div>
        )
    }
}