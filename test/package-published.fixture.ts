import { PublishEvent } from '../src/github';

export default () => {
  return {
    "action": "published",
    "package": {
      "id": 4639072,
      "name": "dummy",
      "namespace": "cloud-cli",
      "description": "",
      "ecosystem": "CONTAINER",
      "package_type": "CONTAINER",
      "html_url": "https://github.com/cloud-cli/packages/4639072",
      "created_at": "2023-01-02T08:45:26Z",
      "updated_at": "2023-01-02T08:45:26Z",
      "owner": {
        "login": "cloud-cli",
        "id": 71595579,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjcxNTk1NTc5",
        "avatar_url": "https://avatars.githubusercontent.com/u/71595579?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/cloud-cli",
        "html_url": "https://github.com/cloud-cli",
        "followers_url": "https://api.github.com/users/cloud-cli/followers",
        "following_url": "https://api.github.com/users/cloud-cli/following{/other_user}",
        "gists_url": "https://api.github.com/users/cloud-cli/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/cloud-cli/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/cloud-cli/subscriptions",
        "organizations_url": "https://api.github.com/users/cloud-cli/orgs",
        "repos_url": "https://api.github.com/users/cloud-cli/repos",
        "events_url": "https://api.github.com/users/cloud-cli/events{/privacy}",
        "received_events_url": "https://api.github.com/users/cloud-cli/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "package_version": {
        "id": 72393075,
        "version": "sha256:a6fbbd73c667d98b1da84b6e06d69a64c6475d0b2821c921687af36f5b9010a7",
        "name": "sha256:a6fbbd73c667d98b1da84b6e06d69a64c6475d0b2821c921687af36f5b9010a7",
        "description": "",
        "summary": "",
        "body": {
          "repository": {
            "repository": {
              "id": 584323781,
              "name": "dummy",
              "owner_id": 71595579,
              "parent_id": null,
              "sandbox": null,
              "updated_at": "2023-01-02T08:39:07.000Z",
              "created_at": "2023-01-02T08:30:00.000Z",
              "public": true,
              "description": "Dummy HTTP server for testing",
              "homepage": null,
              "source_id": 537023545,
              "public_push": null,
              "disk_usage": 2,
              "locked": false,
              "pushed_at": "2023-02-22T11:42:34.000Z",
              "watcher_count": 0,
              "public_fork_count": 0,
              "primary_language_name_id": 417,
              "has_issues": true,
              "has_wiki": true,
              "has_downloads": true,
              "raw_data": {
                "data": {
                  "created_by_user_id": 745095,
                  "primary_language_name": "HTML",
                  "completed_onboarding_tasks": [

                  ]
                }
              },
              "organization_id": 71595579,
              "disabled_at": null,
              "disabled_by": null,
              "disabling_reason": null,
              "health_status": null,
              "pushed_at_usec": 46146,
              "active": true,
              "reflog_sync_enabled": false,
              "made_public_at": "2023-01-02T08:30:00.000Z",
              "user_hidden": 0,
              "maintained": true,
              "template": false,
              "owner_login": "cloud-cli",
              "world_writable_wiki": false,
              "refset_updated_at": "2023-01-02T08:30:01.404Z",
              "disabling_detail": null,
              "archived_at": null
            }
          },
          "info": {
            "type": "blob",
            "oid": "b88317bdfe1b204b0c0996556c9a665faca9f558",
            "mode": 33188,
            "name": "README.md",
            "path": "README.md",
            "size": 169,
            "collection": true,
            "data": "# dummy\n\nDummy HTTP server for testing\n\n## Testing without docker\n\nRun it with [superstatic](https://www.npmjs.com/package/superstatic)\n\n```bash\nnpx run superstatic\n```\n",
            "truncated": false,
            "encoding": "UTF-8",
            "binary": false
          },
          "attributes": {

          },
          "_mime_type": {
            "extension": "md",
            "content_type": "text/markdown",
            "encoding": "quoted-printable"
          },
          "async_data": {
            "state": "fulfilled",
            "source": null,
            "value": "# dummy\n\nDummy HTTP server for testing\n\n## Testing without docker\n\nRun it with [superstatic](https://www.npmjs.com/package/superstatic)\n\n```bash\nnpx run superstatic\n```\n"
          },
          "detect_encoding": {
            "encoding": "UTF-8",
            "ruby_encoding": "UTF-8",
            "confidence": 100
          },
          "encoding": "UTF-8",
          "git_lfs_blob": null,
          "ruby_encoding": "UTF-8",
          "encoded_newlines_re": "(?-mix:\\r\\n|\\r|\\n)",
          "language": {
            "name": "Markdown",
            "fs_name": null,
            "type": "prose",
            "types": [
              "data",
              "markup",
              "programming",
              "prose"
            ],
            "color": "#083fa1",
            "aliases": [
              "markdown",
              "pandoc"
            ],
            "tm_scope": "source.gfm",
            "ace_mode": "markdown",
            "codemirror_mode": "gfm",
            "codemirror_mime_type": "text/x-gfm",
            "wrap": true,
            "language_id": 222,
            "extensions": [
              ".md",
              ".livemd",
              ".markdown",
              ".mdown",
              ".mdwn",
              ".mdx",
              ".mkd",
              ".mkdn",
              ".mkdown",
              ".ronn",
              ".scd",
              ".workbook"
            ],
            "interpreters": [

            ],
            "filenames": [
              "contents.lr"
            ],
            "popular": false,
            "group_name": "Markdown"
          },
          "_formatted": true
        },
        "manifest": "",
        "html_url": "https://github.com/orgs/cloud-cli/packages/container/dummy/72393075",
        "target_commitish": "main",
        "target_oid": "8778a1b61e227c85276c1f8e3b20c84b27c543b7",
        "created_at": "0001-01-01T00:00:00Z",
        "updated_at": "0001-01-01T00:00:00Z",
        "metadata": [

        ],
        "container_metadata": {
          "tag": {
            "name": "8778a1b61e227c85276c1f8e3b20c84b27c543b7",
            "digest": "sha256:a6fbbd73c667d98b1da84b6e06d69a64c6475d0b2821c921687af36f5b9010a7"
          },
          "labels": {
            "description": "",
            "source": "",
            "revision": "",
            "image_url": "",
            "licenses": "",
            "all_labels": {

            }
          },
          "manifest": {
            "digest": "sha256:a6fbbd73c667d98b1da84b6e06d69a64c6475d0b2821c921687af36f5b9010a7",
            "media_type": "application/vnd.docker.distribution.manifest.v2+json",
            "uri": "repositories/cloud-cli/dummy/manifests/sha256:a6fbbd73c667d98b1da84b6e06d69a64c6475d0b2821c921687af36f5b9010a7",
            "size": 2827,
            "config": {
              "digest": "sha256:ffc9a0a2e345d9bcd127386308784814b87cf1c0a906f93c92b141dd87623c7d",
              "media_type": "application/vnd.docker.container.image.v1+json",
              "size": 8215
            },
            "layers": [
              {
                "digest": "sha256:213ec9aee27d8be045c6a92b7eac22c9a64b44558193775a1a7f626352392b49",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 2806054
              },
              {
                "digest": "sha256:9bbf040c9c7e7f53d0a6e817efac5557b467536c9c28f59d4cf93cc73e169281",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 37233367
              },
              {
                "digest": "sha256:bdc748662e8735dce2e8a22544dafb65df7f09f1539c1ca72c3f8473d3d63263",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 2368575
              },
              {
                "digest": "sha256:1bc265bd9f07ff812f92e09e2f522d2e244b0f895fed19ee19f6a72d433afda3",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 451
              },
              {
                "digest": "sha256:c1f4ba5104b0e1a5574fe8d8806d324aefcf1464d41b3e6e2dc63649f5914ed7",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 279
              },
              {
                "digest": "sha256:c620bab07a915bd9c73fbf37aa2fd50cca8adbf0cb995487acfb7acfcc4c7803",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 25977522
              },
              {
                "digest": "sha256:d931e78751e2e93dbe7cdeb0c0849ac1fcefe0ce6f636539a116cd3a65c866ff",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 1268
              },
              {
                "digest": "sha256:d9b77dc025069430522f7d1dd9b1c81aa9df25c87990a168d9f959e05969649f",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 921
              },
              {
                "digest": "sha256:b2037537d45411b571497fb08059617328f183750d73270ce19fe1b8e692b00c",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 923
              },
              {
                "digest": "sha256:70b28c4c08f1d7d02de0fb5849acfd4570d2a08e28053f3dd8ebfb4965407b46",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 11630539
              },
              {
                "digest": "sha256:118a04a7d8017ed01f0a6a5bc04642223f2810ad4ccd7e01453b75f26aa18826",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 122
              },
              {
                "digest": "sha256:4e30f352e6486ea7c44b2e82b7c87833c399d59da84c3810837c61c4fb8755e3",
                "media_type": "application/vnd.docker.image.rootfs.diff.tar.gzip",
                "size": 13617
              }
            ]
          }
        },
        "package_files": [

        ],
        "installation_command": "docker pull ghcr.io/cloud-cli/dummy:8778a1b61e227c85276c1f8e3b20c84b27c543b7",
        "package_url": "ghcr.io/cloud-cli/dummy:8778a1b61e227c85276c1f8e3b20c84b27c543b7"
      },
      "registry": {
        "about_url": "https://docs.github.com/packages/learn-github-packages/introduction-to-github-packages",
        "name": "GitHub CONTAINER registry",
        "type": "CONTAINER",
        "url": "https://CONTAINER.pkg.github.com/cloud-cli",
        "vendor": "GitHub Inc"
      }
    },
    "repository": {
      "id": 584323781,
      "node_id": "R_kgDOItQSxQ",
      "name": "dummy",
      "full_name": "cloud-cli/dummy",
      "private": false,
      "owner": {
        "login": "cloud-cli",
        "id": 71595579,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjcxNTk1NTc5",
        "avatar_url": "https://avatars.githubusercontent.com/u/71595579?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/cloud-cli",
        "html_url": "https://github.com/cloud-cli",
        "followers_url": "https://api.github.com/users/cloud-cli/followers",
        "following_url": "https://api.github.com/users/cloud-cli/following{/other_user}",
        "gists_url": "https://api.github.com/users/cloud-cli/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/cloud-cli/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/cloud-cli/subscriptions",
        "organizations_url": "https://api.github.com/users/cloud-cli/orgs",
        "repos_url": "https://api.github.com/users/cloud-cli/repos",
        "events_url": "https://api.github.com/users/cloud-cli/events{/privacy}",
        "received_events_url": "https://api.github.com/users/cloud-cli/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/cloud-cli/dummy",
      "description": "Dummy HTTP server for testing",
      "fork": false,
      "url": "https://api.github.com/repos/cloud-cli/dummy",
      "forks_url": "https://api.github.com/repos/cloud-cli/dummy/forks",
      "keys_url": "https://api.github.com/repos/cloud-cli/dummy/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/cloud-cli/dummy/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/cloud-cli/dummy/teams",
      "hooks_url": "https://api.github.com/repos/cloud-cli/dummy/hooks",
      "issue_events_url": "https://api.github.com/repos/cloud-cli/dummy/issues/events{/number}",
      "events_url": "https://api.github.com/repos/cloud-cli/dummy/events",
      "assignees_url": "https://api.github.com/repos/cloud-cli/dummy/assignees{/user}",
      "branches_url": "https://api.github.com/repos/cloud-cli/dummy/branches{/branch}",
      "tags_url": "https://api.github.com/repos/cloud-cli/dummy/tags",
      "blobs_url": "https://api.github.com/repos/cloud-cli/dummy/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/cloud-cli/dummy/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/cloud-cli/dummy/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/cloud-cli/dummy/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/cloud-cli/dummy/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/cloud-cli/dummy/languages",
      "stargazers_url": "https://api.github.com/repos/cloud-cli/dummy/stargazers",
      "contributors_url": "https://api.github.com/repos/cloud-cli/dummy/contributors",
      "subscribers_url": "https://api.github.com/repos/cloud-cli/dummy/subscribers",
      "subscription_url": "https://api.github.com/repos/cloud-cli/dummy/subscription",
      "commits_url": "https://api.github.com/repos/cloud-cli/dummy/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/cloud-cli/dummy/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/cloud-cli/dummy/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/cloud-cli/dummy/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/cloud-cli/dummy/contents/{+path}",
      "compare_url": "https://api.github.com/repos/cloud-cli/dummy/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/cloud-cli/dummy/merges",
      "archive_url": "https://api.github.com/repos/cloud-cli/dummy/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/cloud-cli/dummy/downloads",
      "issues_url": "https://api.github.com/repos/cloud-cli/dummy/issues{/number}",
      "pulls_url": "https://api.github.com/repos/cloud-cli/dummy/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/cloud-cli/dummy/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/cloud-cli/dummy/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/cloud-cli/dummy/labels{/name}",
      "releases_url": "https://api.github.com/repos/cloud-cli/dummy/releases{/id}",
      "deployments_url": "https://api.github.com/repos/cloud-cli/dummy/deployments",
      "created_at": "2023-01-02T08:30:00Z",
      "updated_at": "2023-01-02T08:39:07Z",
      "pushed_at": "2023-02-22T11:42:34Z",
      "git_url": "git://github.com/cloud-cli/dummy.git",
      "ssh_url": "git@github.com:cloud-cli/dummy.git",
      "clone_url": "https://github.com/cloud-cli/dummy.git",
      "svn_url": "https://github.com/cloud-cli/dummy",
      "homepage": null,
      "size": 2,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "HTML",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "has_discussions": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [

      ],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "main"
    },
    "organization": {
      "login": "cloud-cli",
      "id": 71595579,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjcxNTk1NTc5",
      "url": "https://api.github.com/orgs/cloud-cli",
      "repos_url": "https://api.github.com/orgs/cloud-cli/repos",
      "events_url": "https://api.github.com/orgs/cloud-cli/events",
      "hooks_url": "https://api.github.com/orgs/cloud-cli/hooks",
      "issues_url": "https://api.github.com/orgs/cloud-cli/issues",
      "members_url": "https://api.github.com/orgs/cloud-cli/members{/member}",
      "public_members_url": "https://api.github.com/orgs/cloud-cli/public_members{/member}",
      "avatar_url": "https://avatars.githubusercontent.com/u/71595579?v=4",
      "description": "A constellation of tiny projects to fully automate a cloud infrastructure, the modular way"
    },
    "sender": {
      "login": "github-actions[bot]",
      "id": 41898282,
      "node_id": "MDM6Qm90NDE4OTgyODI=",
      "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/github-actions%5Bbot%5D",
      "html_url": "https://github.com/apps/github-actions",
      "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
      "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
      "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
      "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
      "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
      "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
      "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
      "type": "Bot",
      "site_admin": false
    }
  } as PublishEvent;
}