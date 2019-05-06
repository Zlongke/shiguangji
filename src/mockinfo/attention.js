import Mock from 'mockjs';
var Random  = Mock.Random;
 
Random.extend({

})

var info = Mock.mock({
    "info|10-15":[
        {
            "img":'@image',
            "name":'@cname'
        }
    ]
})


Mock.mock('http://www.jd.com/api/attention',info)