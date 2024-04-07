import { useUserProfile } from "@snort/system-react";
import classNames from "classnames";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import NavLink from "@/Components/Button/NavLink";
import { NoteCreatorButton } from "@/Components/Event/Create/NoteCreatorButton";
import Icon from "@/Components/Icons/Icon";
import Avatar from "@/Components/User/Avatar";
import { ProfileLink } from "@/Components/User/ProfileLink";
import useEventPublisher from "@/Hooks/useEventPublisher";
import useLogin from "@/Hooks/useLogin";
import { HasNotificationsMarker } from "@/Pages/Layout/HasNotificationsMarker";
// import { WalletBalance } from "@/Pages/Layout/WalletBalance";
import { subscribeToNotifications } from "@/Utils/Notifications";

import { LogoHeader } from "./LogoHeader";

const MENU_ITEMS = [
  {
    label: <FormattedMessage defaultMessage="Home" id="ejEGdx" />,
    icon: "home",
    link: "/",
    nonLoggedIn: true,
  },
  {
    label: <FormattedMessage defaultMessage="Search" id="xmcVZ0" />,
    icon: "search",
    link: "/search",
    nonLoggedIn: true,
  },
  // {
  //   label: <FormattedMessage defaultMessage="Notifications" id="NAidKb" />,
  //   icon: "bell",
  //   link: "/notifications",
  // },
  {
    label: <FormattedMessage defaultMessage="Messages" id="hMzcSq" />,
    icon: "mail",
    link: "/messages",
    hideReadOnly: true,
  },
  // {
  //   label: <FormattedMessage defaultMessage="Deck" id="o/gK53" />,
  //   icon: "deck",
  //   link: "/deck",
  // },
  // {
  //   label: <FormattedMessage defaultMessage="Social Graph" id="CzHZoc" />,
  //   icon: "graph",
  //   link: "/graph",
  // },
  // {
  //   label: <FormattedMessage defaultMessage="About" id="g5pX+a" />,
  //   icon: "info",
  //   link: "/donate",
  //   nonLoggedIn: true,
  // },
  {
    label: <FormattedMessage defaultMessage="Settings" id="D3idYv" />,
    icon: "settings",
    link: "/settings",
  },
];

const getNavLinkClass = (isActive: boolean, narrow: boolean) => {
  const baseClasses =
    "rounded-full p-3 flex flex-row items-center transition-colors duration-200 hover:bg-bg-secondary hover:no-underline";
  const activeClasses = "active font-bold";

  return classNames(baseClasses, {
    [activeClasses]: isActive,
    "xl:px-4": !narrow,
  });
};

export default function NavSidebar({ narrow = false }: { narrow?: boolean }) {
  const { publicKey, readonly } = useLogin(s => ({
    publicKey: s.publicKey,
    readonly: s.readonly,
  }));
  const profile = useUserProfile(publicKey);
  const navigate = useNavigate();
  const { publisher } = useEventPublisher();
  const { formatMessage } = useIntl();

  const className = classNames(
    { "xl:w-56 xl:gap-2 xl:items-start": !narrow },
    "select-none overflow-y-auto hide-scrollbar sticky items-center border-r border-border-color top-0 z-20 h-screen max-h-screen hidden md:flex flex-col px-2 py-4 flex-shrink-0 gap-1",
  );

  const readOnlyIcon = readonly && (
    <span style={{ transform: "rotate(135deg)" }} title={formatMessage({ defaultMessage: "Read-only", id: "djNL6D" })}>
      <Icon name="openeye" className="text-nostr-red" size={20} />
    </span>
  );

  return (
    <div className={className}>
      <LogoHeader showText={!narrow} />
      <div className="mt-1 flex-grow flex flex-col justify-between w-full">
        <div
          className={classNames(
            { "xl:items-start": !narrow, "xl:gap-2": !narrow },
            "gap-1 flex flex-col items-center text-lg font-bold",
          )}>
          {/* {!narrow && <WalletBalance />} */}
          {MENU_ITEMS.filter(a => {
            if ((CONFIG.hideFromNavbar ?? []).includes(a.link)) {
              return false;
            }
            if (readonly && a.hideReadOnly) {
              return false;
            }
            return true;
          }).map(item => {
            if (!item.nonLoggedIn && !publicKey) {
              return "";
            }
            const onClick = () => {
              if (item.link === "/notifications" && publisher) {
                subscribeToNotifications(publisher);
              }
            };
            return (
              <NavLink
                onClick={onClick}
                key={item.link}
                to={item.link}
                className={({ isActive }) => getNavLinkClass(isActive, narrow)}>
                <Icon name={`${item.icon}-outline`} className="icon-outline" size={24} />
                <Icon name={`${item.icon}-solid`} className="icon-solid" size={24} />
                {item.link === "/notifications" && <HasNotificationsMarker />}
                {!narrow && <span className="hidden xl:inline ml-3">{item.label}</span>}
              </NavLink>
            );
          })}
          {publicKey ? (
            <div className="mt-2">
              <NoteCreatorButton alwaysShow={true} showText={!narrow} />
            </div>
          ) : (
            <div className="mt-2">
              <button onClick={() => navigate("/login/sign-up")} className="flex flex-row items-center primary">
                <Icon name="sign-in" size={24} />
                {!narrow && (
                  <span className="hidden xl:inline ml-3">
                    <FormattedMessage defaultMessage="Sign up" id="8HJxXG" />
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {publicKey && (
        <>
          <ProfileLink pubkey={publicKey} user={profile} className="hover:no-underline">
            <div className="mt-2 flex flex-row items-center justify-center font-bold text-md p-1 xl:px-4 xl:py-3 hover:bg-bg-secondary rounded-full cursor-pointer">
              <Avatar pubkey={publicKey} user={profile} size={40} icons={readOnlyIcon} />
              {!narrow && <span className="hidden xl:inline ml-3">{profile?.name}</span>}
            </div>
          </ProfileLink>
          {readonly && (
            <div className="hidden xl:block text-nostr-red text-sm m-3">
              <FormattedMessage defaultMessage="Read-only" id="djNL6D" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
