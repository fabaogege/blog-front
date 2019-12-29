import React from 'react';
import http from './http';
class Tag extends React.Component{
    render() {
        class GetResult extends React.Component{
            async getTags(){
                const res =  await  http.get('/test/getUser')
                console.log(res);
            }
            componentDidMount(){
                this.getTags()
            }
            render() {
                return(
                    <div>axios封装</div>
                );
            }
        }
        return (
            <GetResult></GetResult>
        );
    }
}

export default Tag;
