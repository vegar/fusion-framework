export interface OrgUnit {
    businessArea: null;
    parent: null;
    parentPath: null;
    children: null;
    sapId: string;
    parentSapId: null;
    shortName: string;
    department: string;
    fullDepartment: string;
    name: string;
    type: string;
    level: number;
    levelDescription: string;
    hiddenInUI: null;
    isDeleted: null;
    isPortfolio: boolean;
    deletedDate: null;
    management: null;
    accessRoles: null;
}

export interface Person {
    '@search.score': number;
    azureUniqueId: string;
    mail: string;
    name: string;
    jobTitle: string;
    department: string;
    fullDepartment: string;
    mobilePhone: string;
    officeLocation: string;
    upn: string;
    accountType: string;
    invitationStatus: null;
    accountClassification: string;
    isExpired: boolean;
    lastIndexUpdate: string;
    isResourceOwner: boolean;
    managerAzureId: string;
    manager: Manager;
    positions: any[];
}

export interface Manager {
    azureUniqueId: string;
    name: string;
    mail: string;
    fullDepartment: string;
    department: string;
}
