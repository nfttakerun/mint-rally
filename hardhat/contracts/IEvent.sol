// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
struct EventRecord {
    uint256 eventRecordId;
    uint256 groupId;
    string name;
    string description;
    string date;
    bool useMtx;
}

interface IEventManager {
    function isGroupOwnerByEventId(
        address _addr,
        uint256 _eventId
    ) external view returns (bool);

    function getEventRecordsByGroupId(
        uint256 _groupId
    ) external view returns (EventRecord[] memory);
}
