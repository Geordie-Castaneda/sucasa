# -*- coding: utf-8 -*-


{
    'name': 'SU CASA',
    'version': '1.0',
    'category': 'Hidden',
    'sequence': 6,
    'summary': 'Módulo para SU CASA',
    'description': """

""",
    'depends': ['base','point_of_sale','product','web'],
    'data': [
        'views/pos_config_view.xml',
        'views/sucasa_view.xml',
        'views/pos_session_view.xml',
        'views/pos_order_views.xml',
        'wizard/transaction_from_period_wizard_views.xml',
        'security/ir.model.access.csv'

    ],
    'assets':{
        'point_of_sale.assets': [
            'sucasa/static/src/js/models.js',
            'sucasa/static/src/js/ProductScreenClickS.js',
            'sucasa/static/src/js/Screens/ProductScreen/ProductScreen.js',
            'sucasa/static/src/js/ProductScreenButtons.js',
            'sucasa/static/src/js/Popups/CustomPopup.js',
            'sucasa/static/src/js/Screens/ReceiptScreen/OrderReceipt.js'
        ],
        'web.assets_qweb':[
            'sucasa/static/src/xml/ProductScreenButtonsViews.xml',
            'sucasa/static/src/xml/ViewsPopups/CustomPopupView.xml',
            'sucasa/static/src/xml/Screens/ReceiptScreen.xml'
        ],
        'web.assets_backend': [
            'sucasa/static/src/js/search_bar.js',
        ],
    },
    'installable': True,
    'auto_install': False,
}
