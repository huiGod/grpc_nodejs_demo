var PROTO_FILE_PATH = '/Users/huigod/front_end/proto/Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.huiGod.proto;

var server = new grpc.Server();

server.addService(grpcService.StudentService.service, {
    getRealNameByUsername : getRealNameByUsername,
    getStudentsByAge : getStudentsByAge,
    getStudentsWrapperByages : getStudentsWrapperByages,
    biTalk : biTalk

});
server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log('username: ' + call.request.username);
    callback(null, {realname: '张三'});
}

function getStudentsByAge (){

}

function getStudentsWrapperByages (){

}

function biTalk (){

}