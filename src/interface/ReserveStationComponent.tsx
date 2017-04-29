import * as React from 'react';
declare var window: any;

export class ReserveStationComponent extends React.Component<any, any> {

   constructor(props: any) {
      super(props);
      this.state = {
         title: null,
         content: [],
      }
      this.componentWillMount();
   }

   componentWillMount() {
      window.state.callback = (data) => {
         this.setState(data);
      }
   }
   render() {
      return (
         <div className='panel panel-default'>
            <div className='panel-heading'>{this.state.title}</div>
            <div className='panel-body'>
               <table className='table table-bordered'>
                  <thead>
                     <tr>
                        <td>Inst</td>
                        <td>Qj</td>
                        <td>Vj</td>
                        <td>Qk</td>
                        <td>Vk</td>
                        <td>A</td>
                        <td>ROB</td>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.state.content.map((row, i) => <tr key={i}>
                           <td key={i + 65}>{i}</td>
                           <td key={i + 131}>{row}</td>
                           <td>row.instruction</td>
                           <td>row.Qj</td>
                           <td>row.Vj</td>
                           <td>row.Qk</td>
                           <td>row.Vk</td>
                           <td>row.A</td>
                           <td>row.ROB</td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>);
   }
}