class User {
    constructor(id, email, password, registration) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.registration = registration;
    }
}

class Client extends User {
    constructor(id, email, password, registration, adult) {
        super(id, email, password, registration);
        this.adult = adult;
    }
    getTotal() {
        let totalStreamingService = streamingService.getTotalByClient();
        let totalDownloadService = streamingService.getTotalByClient();

        return totalStreamingService + totalDownloadService;
    }
}

class Service {
    constructor(timestamp, clientID, id) {
        this.timestamp = timestamp;
        this.clientID = clientID;
        this.id = id;
    }

}

class StreamingService extends Service {
    constructor(timestamp, clientID, multimediaContentID) {
        super(timestamp, clientID);
        this.multimediaContentID = multimediaContentID;
    }
    getTotalByClient(clientID) {
        let getMultimediaContent = StreamingService.clientID.find(clientID);
        let total = PremiumContent.getFilmsStreaming(getMultimediaContent);

        return total;
    }
}

class DownloadService extends Service {
    constructor(timestamp, clientID, multimediaContentID) {
        super(timestamp, clientID);
        this.multimediaContentID = multimediaContentID;
    }
    getTotalByClient(clientID) {
        let getMultimediaContent = StreamingService.clientID.find(clientID);
        let total = PremiumContent.getFilmsDownload(getMultimediaContent);

        return total;
    }
}

class MultimediaContent {
    constructor(id, title, duration, adult, size, downloadPrice, streamingPrice) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.adult = adult;
        this.size = size;
        this.downloadPrice = downloadPrice;
        this.streamingPrice = streamingPrice;

    }
}

class PremiumContent extends MultimediaContent {
    constructor(id, title, duration, adult, size, downloadPrice, streamingPrice, additionalFee) {
        super(id, title, duration, adult, size, downloadPrice, streamingPrice);
        this.additionalFee = additionalFee;
    }
    getFilmsStreaming(getMultimediaContent) {
        let total = 0;

        this.getMultimediaContent.forEach(multimediaContent => {
            total += multimediaContent.streamingPrice + multimediaContent.additionalFee;
        });
        return total;
    }
    getFilmsDownload(getMultimediaContent) {
        let total = 0;

        this.getMultimediaContent.forEach(multimediaContent => {
            total += multimediaContent.downloadPrice + multimediaContent.additionalFee;
        });
        return total;
    }
}
