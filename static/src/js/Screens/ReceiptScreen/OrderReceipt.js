odoo.define('sucasa.OrderReceipt', function(require) {
    'use strict';


    const OrderReceipt = require('point_of_sale.OrderReceipt');
    const Registries = require('point_of_sale.Registries');
    const { useState, useContext } = owl.hooks;
    const models = require('point_of_sale.models');
    const pos_db = require('point_of_sale.DB');
    const rpc = require('web.rpc');


    const SuCasaOrderReceipt = OrderReceipt =>
        class extends OrderReceipt {

          constructor(){
            super(...arguments);

            var self = this;
            var order = self.env.pos.get_order();

            this.state = useState({
              'transaccion_id':'',
              'provider_authorizacion':'',
              'reference1': '',
              'reference2':'',
              'reference3':'',
              'legal_info':'',
            });

            var state = this.state;

            rpc.query({
              model: 'pos.order',
              method: 'ticket_values',
              args:[[], [order.name]]
            },{
            }).then(function (ticket_values){
              console.log('Entramos al RPC');
              console.log(ticket_values);
              if(ticket_values){
                state.transaccion_id = ticket_values['transaccion_id']
                state.provider_authorizacion = ticket_values['provider_authorizacion']
                state.reference1 = ticket_values['reference1']
                state.reference2 = ticket_values['reference2']
                state.reference3 = ticket_values['reference3']
                state.legal_info = ticket_values['legal_info']
              }

            });

          }


        };

    Registries.Component.extend(OrderReceipt, SuCasaOrderReceipt);

    return SuCasaOrderReceipt;


});