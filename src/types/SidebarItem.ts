export interface SidebarItem {
    iconClass: string;
    label: string;
    actionEvent: () => void;
    isLogoItem?: boolean;
}

export interface SidebarUserItem {
    avatarUrl?: string;
    username: string;
    email: string;
    actionEvent: () => void;
}