import * as React from 'react';
declare var window: any;

export class RegisterComponent extends React.Component<any, any> {

   constructor(props: any) {
      super(props);
      this.state = {
         title: null,
         content: [],
         show: [1, 8]
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
                  <tbody>
                     {
                        this.state.content.map((row, i) => <tr key={i}>
                           <td key={i + 65}>{i}</td>
                           <td key={i + 131}>{row}</td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
            <div className='panel-footer'>
               <button type='button' className='btn'><i className='fa fa-plus' aria-hidden='true'></i>
               </button>
               <button type='button' className='btn'><i className='fa fa-minus' aria-hidden='true'></i></button>
               <button type='button' className='btn'><i className='fa fa-check' aria-hidden='true'></i></button>
               <button type='button' className='btn'><i className='fa fa-times' aria-hidden='true'></i></button>
               <button type='button' className='btn'><i className='fa fa-repeat' aria-hidden='true'></i></button>
            </div>
         </div>);
   }
}