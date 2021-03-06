﻿var dataService = new function () {
    

    getProjectsSummary = function (callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetProjectsSummary', function (data) {
            callback(data);
        });
    };

    getUsersSummary = function (callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetUsersSummary', function (data) {
            callback(data);
        });
    };

    getAreasByProject = function(projectId, callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetAreas?projectId=' + projectId, function (data) {
            callback(data);
        });
    };

    searchTicket= function (criteria, callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/TicketSearch?criteria=' + criteria, function (data) {
            callback(data);
        });
    };

    getStatusList = function (callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetStatusList' , function (data) {
            callback(data);
        });
    };


    getPriorityList = function (callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetPriorityList', function (data) {
            callback(data);
        });
    };

    getCategoryList = function (callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetCategoryList', function (data) {
            callback(data);
        });
    };

    getProjects = function (callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetProjects', function (data) {
            callback(data);
        });
    };

    getDashBoardSummary= function(callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetDashBoardSummary', function (data) {
            callback(data);
        });
    }

    getDashBoardOpenTicketByPriority = function (projects,callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetDashBoardOpenTicketByPriority?projects=' + projects, function (data) {
            callback(data);
        });
    }

    getDashBoardStatusSummary = function (projects,callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetDashBoardStatusSummary?projects=' + projects, function (data) {
            callback(data);
        });
    }

    getProjectList = function(callback) {
        $.getJSON(window.applicationBaseUrl + 'api/TicketApi/GetProjectList', function (data) {
            callback(data);
        });
    }

    return {
        getProjectsSummary: getProjectsSummary,
        getUsersSummary: getUsersSummary,
        getAreasByProject: getAreasByProject,
        getStatusList: getStatusList,
        getPriorityList: getPriorityList,
        getCategoryList: getCategoryList,
        getProjects: getProjects,
        searchTicket: searchTicket,
        getDashBoardSummary: getDashBoardSummary,
        getDashBoardOpenTicketByPriority: getDashBoardOpenTicketByPriority,
        getDashBoardStatusSummary:getDashBoardStatusSummary,
        getProjectList: getProjectList
    };

}();