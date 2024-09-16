const menuItems = {
  items: [
    // <-----user management---->

    {
      id: 'ui-element1',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'user management',
          title: 'User Management',
          type: 'collapse',
          icon: 'feather icon-user',
          children: [
            {
              id: 'collapse',
              title: ' Profile ',
              type: 'item',
              url: '/user_management/profile_screen'
            },
            {
              id: 'collapse',
              title: 'Dashboard ',
              type: 'item',
              url: '/management_dashboard'
            }
          ]
        }
      ]
    },

    // ----------------------------

    // <-----Tender management---->

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'Tender management',
          title: ' Tender Management',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'collapse',
              title: 'Create Tender ',
              type: 'item',
              url: '/tender_management/tender_screen'
            },
            {
              id: 'collapse',
              title: 'Tender List ',
              type: 'item',
              url: '/tender_management/tenderlist'
            },
            {
              id: 'collapse',
              title: 'Tender Details ',
              type: 'item',
              url: '/tender_management/tender_details'
            }
          ]
        }
      ]
    },

    // ----------------------------

    // vendor management

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'vendor management',
          title: ' vendor Management',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'collapse',
              title: 'Vendor Registration ',
              type: 'item',
              url: '/vendor_management/vendor_registration'
            },

            {
              id: 'collapse',
              title: 'Vendor List ',
              type: 'item',
              url: '/vendor_management/vendorlist'
            },
            {
              id: 'collapse',
              title: 'Vendor Profile  ',
              type: 'item',
              url: '/vendor_management/vendorprofile'
            }
          ]
        }
      ]
    },

    // -----------------

    // Bid management

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'Bid management',
          title: 'Bid management',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'collapse',
              title: 'Bid Submission ',
              type: 'item',
              url: '/bid_management/bid_submission'
            },
            {
              id: 'collapse',
              title: 'Bid List ',
              type: 'item',
              url: '/bid_management/bid_list'
            },
            {
              id: 'collapse',
              title: 'Bid Evaluation ',
              type: 'item',
              url: '/bid_management/bid_evaluation'
            }
          ]
        }
      ]
    },

    // -----------------

    // Evaluation Management

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'Evaluation Management',
          title: 'Evaluation',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'collapse',
              title: 'Evaluation Criteria ',
              type: 'item',
              url: '/evalution/evalution_setup'
            },
            {
              id: 'collapse',
              title: 'Evaluator Assignment',
              type: 'item',
              url: '/evalution/evalutionAssignment'
            },
            {
              id: 'collapse',
              title: 'Evaluation Summary ',
              type: 'item',
              url: '/evalution/evalutionSummary'
            }
          ]
        }
      ]
    },

    // -----------------

    // Contract Award

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'Contract Award',
          title: 'Contract Award',
          type: 'collapse',
          icon: 'feather icon-award',
          children: [
            {
              id: 'collapse',
              title: 'Recommendation',
              type: 'item',
              url: '/ContractAward/Recommendation'
            },
            {
              id: 'collapse',
              title: 'Contract Generation ',
              type: 'item',
              url: '/ContractAward/ContractGeneration'
            },
            {
              id: 'collapse',
              title: 'Contract Signing ',
              type: 'item',
              url: '/ContractAward/ContractSigning'
            }
          ]
        }
      ]
    },

    // -----------------

    //  Document Management

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'Document Management',
          title: ' Document ',
          type: 'collapse',
          icon: 'feather icon-file',
          children: [
            {
              id: 'collapse',
              title: 'Document Upload ',
              type: 'item',
              url: '/DocumentManagement/Upload'
            },
            {
              id: 'collapse',
              title: 'Document Library ',
              type: 'item',
              url: '/DocumentManagement/Library'
            }
          ]
        }
      ]
    },
    //Report
    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: ' Report and Analytics ',
          title: '  Report & Analytics  ',
          type: 'collapse',
          icon: 'feather icon-file',
          children: [
            {
              id: 'collapse',
              title: 'Report Generation ',
              type: 'item',
              url: '/Reporting&Analytics/Generation'
            },
            {
              id: 'collapse',
              title: 'Customization ',
              type: 'item',
              url: '/Reporting&Analytics/Customization'
            }
          ]
        }
      ]
    },

    //  System Administration

    {
      id: 'element',
      title: '',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'System Administration',
          title: 'Administration',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'collapse',
              title: 'System Configuration ',
              type: 'item',
              url: '/Administration/Configurationscreen'
            },
            {
              id: 'collapse',
              title: 'Audit Log',
              type: 'item',
              url: '/Administration/AuditLog'
            }
          ]
        },
                {
          id: 'disabled-menu',
          title: '',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: ''
        }
      ]
    },
     
  ]
};

export default menuItems;
