const page = {
  page_title: 'Licenses',
  plans: [
    {
      name: 'Free',
      active: true,
      slug: 'free_license',
    },
    {
      name: 'Pro',
      active: false,
      slug: 'pro_license',
    },
    {
      name: 'VIP',
      active: false,
      slug: 'vip_license',
    },
  ],
  tabs: [
    {
      title: 'Subscription',
      data: {},
    },
    {
      title: 'Outright',
      data: {},
    },
    {
      title: 'Offline Activation',
    },
  ],
};

const data = {
  systems: [
    {
      system_name: 'James-Main-Mackbook',
      id: 91520,
      created_date: '01 Jan 2019',
      active_licenses: 2,
    },
    {
      system_name: 'James-Laptop',
      id: 91518,
      created_date: '15 Jan 2020',
      active_licenses: 1,
    },
  ],
  subsystems: [
    {
      system_id: 91520,
      licenses: 'Lightworks Pro',
      expires: 'Never',
      cost: '30.00',
    },
    {
      system_id: 91520,
      licenses: 'QScan Max',
      expires: '29 Aug 2021',
      cost: '26.00',
    },
    {
      system_id: 91518,
      licenses: 'Lightworks Pro',
      expires: 'Never',
      cost: '30.00',
    },
    {
      system_id: 91518,
      licenses: 'QScan Max',
      expires: '29 Jul 2021',
      cost: '78.00',
    },
  ],
};

export const pageInfo = (state = page, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return (state = state + 1);
    case 'MINUS_COUNT':
      return (state = state - 1);
    default:
      return state;
  }
};

export const dataPage = (state = data, action) => {
  switch (action.type) {
    case 'ADD_SYSTEM':
      return {
        ...state,
        systems: [
          ...state.systems,
          action.object
        ]
      }
    case 'DELETE_SYSTEM': 
    return {
      ...state,
      systems: [
        ...state.systems.filter(el => el.id !== action.id)
      ]
    }
    case 'DELETE_LICENSE': 
    return {
      ...state,
      subsystems: [
        ...state.subsystems.filter(el => el !== action.license)
      ]
    }
    case 'ADD_LICENSE':
      return {
        ...state,
        subsystems: [
          ...state.subsystems,
          action.object
        ]
      }
    default:
      return state;
  }
};
