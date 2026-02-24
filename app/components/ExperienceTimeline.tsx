"use client";

import { Flex, List, ListItem, Text } from "@once-ui-system/core";
type ExperienceRole = {company: string;location: string;role: string;dates: string;bullets: string[];};
type ExperienceTimelineProps = {roles: ExperienceRole[];};
export default function ExperienceTimeline({ roles }: ExperienceTimelineProps) {
  return (
    <Flex direction="column" gap="24"> {roles.map((role, index) => (<Flex key={role.role} direction="row" gap="16" align="start">
          <Flex minWidth="32" minHeight="32" maxWidth="32" maxHeight="32" radius="full" background="surface" border="neutral-strong" center>
            <Text variant="label-default-s">{index + 1}</Text>
          </Flex>
          <Flex direction="column" gap="8" fillWidth>
            <Flex direction="column" gap="2">
              <Text variant="label-default-m">{role.role}</Text>
              <Text variant="label-default-s" onBackground="neutral-medium">{role.company}</Text>
              <Text variant="label-default-s" onBackground="neutral-medium">{role.location} - {role.dates}</Text>
            </Flex>
            <List gap="8"> {role.bullets.map((item) => (
              <ListItem key={item} variant="body-default-s" onBackground="neutral-medium">{item}</ListItem>
            ))}
            </List>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}