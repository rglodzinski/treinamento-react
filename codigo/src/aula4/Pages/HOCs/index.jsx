import React, { Component } from "react";
import UsersTable from "./UsersTable";
import { withLoading } from "./withLoading";

import jsonUsers from "./users.json";
import jsonLogs from "./logs.json";
import SystemLogs from "./SystemLogs";

class Hocs extends Component {
  state = {
    users: [],
    logs: []
  };

  fetchUsers = () => this.setState({ users: jsonUsers });
  fetchLogs = () => this.setState({ logs: jsonLogs });

  componentDidMount() {
    setTimeout(this.fetchUsers, 5000);
    setTimeout(this.fetchLogs, 7000);
  }

  render() {
    const { users, logs } = this.state;
    const isLoadingUsers = !users || users.length === 0;
    const isLoadingSystemLogs = !logs || logs.length === 0;

    const UsersTableWithLoading = withLoading(
      UsersTable,
      isLoadingUsers,
      users
    );
    const SystemLogsWithLoading = withLoading(
      SystemLogs,
      isLoadingSystemLogs,
      logs
    );

    return (
      <div>
        <UsersTableWithLoading />
        <br />
        <SystemLogsWithLoading />
      </div>
    );
  }
}

export default Hocs;
