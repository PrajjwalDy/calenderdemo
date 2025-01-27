angular.module('mockTestsApp', []).controller('MockTestsController', function($scope) {
  $scope.months = ['March', 'April', 'May', 'June', 'July', 'August', 'September'];
  $scope.selectedMonth = 'March';

  $scope.timetable = {
      'March': [
          {
              date: 'Sun 16',
              name: 'CSSE01',
              description: 'Maths, Eng, Comp. & Creative Writing',
              centers: [
                  { name: 'Ilford', time: '3:00 PM - 5:00 PM', url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '12:30 PM - 1:30 PM', url: 'https://www.sehyog.co.uk' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
        {
          date: 'Sun 23',
          name: 'GLBR01',
          description: 'Maths, Eng, Verbal Reasoning(VR), Non Verbal Reasoning(NVR)',
          centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Amershem', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
              { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
          ]
      },
      {
        date: 'Sun 23',
        name: 'GLKE01',
        description: 'Maths, English, VR, NVR',
        centers: [
            { name: 'Dartford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
            { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk',url: 'https://www.sehyog.co.uk' }
        ]
    },
    {
      date: 'Sun 30',
      name: 'FSCE01',
      description: 'Maths, Eng, Creative Writing',
      centers: [
          { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Center 3', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
          { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
  },
  {
    date: 'Sun 30',
    name: 'GLQE01',
    description: 'Maths, Eng, Verbal Reasoning(VR)',
    centers: [
        { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'CHELMSFORD', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
      ]
    },
  {
    date: 'Sun 30',
    name: 'GLHBS01',
    description: 'Maths, Eng, VR, NVR',
    centers: [
        { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'CHELMSFORD', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
        { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
    ]
}
      ],
      'April': [
          {
              date: 'Sun 06',
              name: 'CSSE02',
              description: 'Maths, Eng, Comp., VR, Creative Writing',
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' ,url: 'https://www.sehyog.co.uk'},
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM',url: 'https://www.sehyog.co.uk' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM',url: 'https://www.sehyog.co.uk' }
              ]
          },
          {
            date: 'Sun 13',
            name: 'GLBR02',
            description: 'Maths, Eng, VR, NVR',
            centers: [
                { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
                { name: 'Amerhsam', time: '5:30 PM - 7:30 PM' },
                { name: 'Online', time: '9:00 AM - 6:00 PM' }
            ]
        },
        {
          date: 'Sun 13',
          name: 'GLKE02',
          description: 'Maths, Eng, VR, NVR',
          centers: [
              { name: 'Dartford', time: '10:00 AM - 12:00 PM' },
              { name: 'Online', time: '9:00 AM - 6:00 PM' }
          ]
      },
      {
        date: 'Sun 27',
        name: 'CSSE03',
        description: 'Maths, Eng, VR, NVR',
        centers: [
            { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
            { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
            { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
            { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM' },
            { name: 'Online', time: '9:00 AM - 6:00 PM' }
        ]
    }
      ],
      'May': [
          {
              date: 'Sun 04',
              name: 'FSCE02',
              description: 'Maths, Eng, Creative Writing',
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM' }
              ]
          },
          {
            date: 'Sun 04',
            name: 'GLQE02',
            description: 'Maths, English, VR',
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
              { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' },
              { name: 'Basildon', time: '5:30 PM - 7:30 PM' },
              { name: 'Amersham', time: '5:30 PM - 7:30 PM' },
              { name: 'Online', time: '9:00 AM - 6:00 PM' }
            ]
        },
        {
          date: 'Sun 04',
          name: 'GLHBS02',
          description: 'Maths, Eng, VR, NVR',
          centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
              { name: 'Online', time: '9:00 AM - 6:00 PM' }
          ]
      },
      {
        date: 'Sun 11',
        name: 'CSSE04',
        description: 'Maths, Eng, Comp, VR, Creative Writing',
        centers: [
          { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
          { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
          { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
          { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM' },
          { name: 'Online', time: '9:00 AM - 6:00 PM' }
        ]
    },
    {
      date: 'Sun 18',
      name: 'GLRB03',
      description: 'Maths, Eng, VR, NVR',
      centers: [
        { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
        { name: 'Amersham', time: '9:00 AM - 6:00 PM' },
        { name: 'Online', time: '9:00 AM - 6:00 PM' }
      ]
  },
  {
    date: 'Sun 18',
    name: 'GLKE03',
    description: 'Maths, Eng, VR, NVR',
    centers: [
        { name: 'Dartford', time: '10:00 AM - 12:00 PM' },
        { name: 'Online', time: '9:00 AM - 6:00 PM' }
    ]
},
{
  date: 'Sun 25',
  name: 'CSSE05',
  description: 'Maths, English, Comp VR, Creative Writing',
  centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
      { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
      { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
      { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
}
      ],
      'June': [
          {
              date: 'Sun 01',
              name: 'FSCE03',
              description: 'Maths, Eng, Creative Writing',
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM' },
                  { name: 'Amershem', time: '5:30 PM - 7:30 PM' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM' }
              ]
          },
          {
            date: 'Sun 01',
            name: 'GLQE03',
            description: 'Maths, English, VR',
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
              { name: 'Harrow', time: '5:30 PM - 7:30 PM' },
              { name: 'Online', time: '9:00 AM - 6:00 PM' }
            ]
        },
        {
          date: 'Sun 01',
          name: 'GLHBS03',
          description: 'Maths, Eng, VR, NVR',
          centers: [
            { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
            { name: 'Harrow', time: '5:30 PM - 7:30 PM' },
            { name: 'Online', time: '9:00 AM - 6:00 PM' }
          ]
      },
      {
        date: 'Sun 08',
        name: 'CSSE06',
        description: 'Maths, Eng, Comp, VR, Creative Writing',
        centers: [
          { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
          { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
          { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
          { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM' },
          { name: 'Online', time: '9:00 AM - 6:00 PM' }
        ]
    },
    {
      date: 'Sun 15',
      name: 'GLRB04',
      description: 'Maths, Eng, VR, NVR',
      centers: [
        { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
        { name: 'Amersham', time: '9:00 AM - 6:00 PM' },
        { name: 'Online', time: '9:00 AM - 6:00 PM' }
      ]
  },
  {
    date: 'Sun 15',
    name: 'GLKE04',
    description: 'Maths, Eng, VR, NVR',
    centers: [
        { name: 'Dartford', time: '10:00 AM - 12:00 PM' },
        { name: 'Online', time: '9:00 AM - 6:00 PM' }
    ]
},
{
  date: 'Sun 22',
  name: 'CSSE07',
  description: 'Maths, English, Comp VR, Creative Writing',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
    { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
{
  date: 'Sun 29',
  name: 'FSCE04',
  description: 'Maths, English, Creative Writing',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
    { name: 'Amersham', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
{
  date: 'Sun 29',
  name: 'GLQE04',
  description: 'Maths, English, VR',
  centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
      { name: 'Harrow', time: '9:00 AM - 6:00 PM' },
      { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
}
,
{
  date: 'Sun 29',
  name: 'GLHBS04',
  description: 'Maths, English, VR, NVR',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'Harrow', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
}
      ],
      'July': [
          {
              date: 'Sun 06',
              name: 'CSSE08',
              description: 'Maths, Eng, Comp, VR, Creative Writing',
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM' }
              ]
          },
          {
            date: 'Sun 13',
            name: 'GLRB05',
            description: 'Maths, English, VR, NVR',
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
              { name: 'Amersham', time: '5:30 PM - 7:30 PM' },
              { name: 'Online', time: '9:00 AM - 6:00 PM' }
            ]
        },
        {
          date: 'Sun 13',
          name: 'GLKE05',
          description: 'Maths, Eng, VR, NVR',
          centers: [
            { name: 'Dartford', time: '10:00 AM - 12:00 PM' },
            { name: 'Online', time: '9:00 AM - 6:00 PM' }
          ]
      },
      {
        date: 'Sun 13',
        name: 'SET01',
        description: 'SUTTON 1',
        centers: [
          { name: 'Sutton', time: '9:00 AM - 6:00 PM' },
          { name: 'Online', time: '9:00 AM - 6:00 PM' }
        ]
    },
    {
      date: 'Sun 20',
      name: 'CSSE09',
      description: 'Maths, Eng, Comp, VR, Cretive Writing',
      centers: [
        {name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
        { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
        { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
        { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM' },
        { name: 'Online', time: '9:00 AM - 6:00 PM' }
      ]
  },
  {
    date: 'Sun 27',
    name: 'GLQE05',
    description: 'Maths, Eng, VR, NVR',
    centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
      { name: 'Harrow', time: '9:00 AM - 6:00 PM' },
      { name: 'Online', time: '9:00 AM - 6:00 PM' }
    ]
},
{
  date: 'Sun 27',
  name: 'GLHBS05',
  description: 'Maths, English, Comp VR, Creative Writing',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'Harrow', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
{
  date: 'Sun 27',
  name: 'FSCEO5',
  description: 'Maths, English, Creative Writing',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
    { name: 'Amersham', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
      ],
      'August': [
          {
              date: 'Sun 03',
              name: 'CSSE10',
              description: 'Maths, Eng, Comp, VR, Creative Writing',
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM' }
              ]
          },
          {
            date: 'Sun 10',
            name: 'GLRB06',
            description: 'Maths, English, VR, NVR',
            centers: [
              { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
              { name: 'Amersham', time: '5:30 PM - 7:30 PM' },
              { name: 'Online', time: '9:00 AM - 6:00 PM' }
            ]
        },
        {
          date: 'Sun 10',
          name: 'GLKE06',
          description: 'Maths, Eng, VR, NVR',
          centers: [
            { name: 'Dartford', time: '10:00 AM - 12:00 PM' },
            { name: 'Online', time: '9:00 AM - 6:00 PM' }
          ]
      },
      {
        date: 'Sun 10',
        name: 'SET02',
        description: 'SUTTON 2',
        centers: [
          { name: 'Sutton', time: '9:00 AM - 6:00 PM' },
          { name: 'Online', time: '9:00 AM - 6:00 PM' }
        ]
    },
    {
      date: 'Sun 17',
      name: 'FSCE06',
      description: 'Maths, Engish, Cretive Writing',
      centers: [
        {name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
        { name: 'Amersham', time: '9:00 AM - 6:00 PM' },
        { name: 'Online', time: '9:00 AM - 6:00 PM' }
      ]
  },
  {
    date: 'Sun 17',
    name: 'GLQE06',
    description: 'Maths, Eng, VR',
    centers: [
      { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
      { name: 'Harrow', time: '9:00 AM - 6:00 PM' },
      { name: 'Online', time: '9:00 AM - 6:00 PM' }
    ]
},
{
  date: 'Sun 17',
  name: 'GLHBS06',
  description: 'Maths, English, VR, NVR',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'Harrow', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
{
  date: 'Sun 24',
  name: 'CSSE11',
  description: 'Maths, English, Comp, VR, Creative Writing',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'CHELMSFORD', time: '9:00 AM - 6:00 PM' },
    { name: 'BASILDON', time: '9:00 AM - 6:00 PM' },
    { name: 'Southend-On-Sea', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
{
  date: 'Sun 24',
  name: 'GLRB07',
  description: 'Maths, English, VR, NVR',
  centers: [
    { name: 'ILFORD', time: '10:00 AM - 12:00 PM' },
    { name: 'Amersham', time: '9:00 AM - 6:00 PM' },
    { name: 'Online', time: '9:00 AM - 6:00 PM' }
  ]
},
      ],
      'August': [
          {
              date: 'Sun 07',
              name: 'CSSE12',
              description: 'Maths, Eng, Comp, VR, Creative Writing',
              centers: [
                  { name: 'Ilford', time: '10:00 AM - 12:00 PM' },
                  { name: 'Chelmsford', time: '5:30 PM - 7:30 PM' },
                  { name: 'Basildon', time: '5:30 PM - 7:30 PM' },
                  { name: 'Southend-On-Sea', time: '5:30 PM - 7:30 PM' },
                  { name: 'Online', time: '9:00 AM - 6:00 PM' }
              ]
          },

    ]
  };

  $scope.selectMonth = function(month) {
      $scope.selectedMonth = month;
  };
});
