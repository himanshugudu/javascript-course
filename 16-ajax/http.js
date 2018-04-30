function get() {
    return new Promise(function(resolve, reject) {
        var getUrl = 'https://realtimedata-190221.firebaseio.com/himansu.json';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', getUrl);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200 && xhr.responseText) {
                var responseJson = JSON.parse(xhr.responseText);
                resolve(responseJson);
            }
            if (xhr.status >= 500) {
                reject(xhr.responseText);
            }
        }
    });
}

function update(id, employee) {
    return new Promise(function(resolve, reject) {
        var dataToSend = JSON.stringify(employee);
        console.log(dataToSend);
        var updateUrl = 'https://realtimedata-190221.firebaseio.com/himansu/' + id + '.json';
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', updateUrl);
        xhr.send(dataToSend);
        xhr.onload = function() {
            resolve(xhr.responseText);
        }
    });
}

function add(employee) {
    return new Promise(function(resolve, reject) {
        var dataToSend = JSON.stringify(employee);
        console.log(dataToSend);
        var addUrl = 'https://realtimedata-190221.firebaseio.com/himansu.json';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', addUrl);
        xhr.send(dataToSend);
        xhr.onload = function() {
            resolve(xhr.responseText);
        }
    });
}

function remove(id) {
    return new Promise(function(resolve, reject) {
        var updateUrl = 'https://realtimedata-190221.firebaseio.com/himansu/' + id + '.json';
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', updateUrl);
        xhr.send();
        xhr.onload = function() {
            resolve(xhr.responseText);
        }
    });
}