import Mock from 'mockjs';
var Random = Mock.Rendom;

Random.extend({

})

var lunbo = Mock.mock({
    "lunbo|3-5":[
       {'img':"@image"}
    ]
})
Mock.mock('http://www.product.com/api/detail',lunbo)